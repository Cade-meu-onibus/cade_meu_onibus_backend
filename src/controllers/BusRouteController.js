const BusRoute = require("../models/BusRoute");
const BusStop = require("../models/BusStop");

module.exports = { 
    
    async index(req, res) {
        const busRoutes = await BusRoute.findAll();

        return res.json(busRoutes);
    },
    
    async getBusRouteFromNumber(req, res) {
        const busRoute = await BusRoute.findByPk(req.params.busNumber);
        const busStops = await busRoute.getBusStops();
        const jsonResponse = {
          name: busRoute.name,
          number: busRoute.number,
          route: busRoute.route.coordinates,
          busStops: busStops
                .filter(item => item.coordinates) // Filtra os itens que possuem a propriedade 'coordinates'
                .map((busStop) => busStop.coordinates.coordinates)
        }
        return res.json(jsonResponse);
    }
    ,
    async store(req, res) {
        const {name, number, route} = req.body;

        const busRoute = await BusRoute.create({name, number, route});

        return res.status(201).json(busRoute);
    }
    ,
    async createBusRouteWithBusStops(req, res) {
        const {name, number, route, busStops} = req.body;
      
        try {
          // Cria a rota do ônibus
          const busRoute = await BusRoute.create({
            name: name,
            number: number,
            route: route
            // outros campos relevantes para a rota do ônibus
          });
      
          // Cria as paradas do ônibus
          const createdBusStops = await Promise.all(
            busStops.map(async (busStop) => {
              const createdBusStop = await BusStop.create({
                // Definindo um nome vazio pra salvar no banco
                name: "",
                // Coloca cada coordenada passada na requisição dentro da formatação necessária para a criação
                coordinates: {type:"Point", "coordinates":busStop}, 
              });
      
              // Associa a parada criada à rota do ônibus
              await busRoute.addBusStop(createdBusStop);
      
              return createdBusStop;
            })
          );
      
          // Faça qualquer ação adicional necessária após a criação da rota e das paradas do ônibus
      
          res.status(201).json({
            busRoute: busRoute,
            busStops: createdBusStops,
          });
        } catch (error) {
          // Lide com erros adequadamente
          console.error('Erro ao criar rota e paradas do ônibus:', error);
          res.status(500).json({ error: 'Ocorreu um erro ao criar rota e paradas do ônibus.' });
        }
    }
};