using Core.interfaces.Repositories;
using Core.models.Repositories;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Infrastructure.Repositories.MongoDb
{
    public class ChatGPTRepository : IChatGPTRepository
    {
        private readonly IMongoCollection<ClientsModel> _ClientsCollection;

        public ChatGPTRepository(IOptions<ModelSettings> options)
        {

            var mongoClient = new MongoClient(options.Value.ConnectionString);
            var db = mongoClient.GetDatabase(options.Value.DatabaseName);

            _ClientsCollection = db.GetCollection<ClientsModel>("Clients");
        }

        public async Task<ICollection<ClientsModel>> GetListClientsAsync()
        {
            //var filterQuery = Builders<ClientsModel>.Filter.ElemMatch(x => x.ClientId);

            return await _ClientsCollection.Find(x => true).ToListAsync();
        }

        public async Task<ClientsModel> GetClientAsync(string nome)
        {
            return await _ClientsCollection.Find(x => x.ClientId == nome).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(ClientsModel client)
        {            
            await _ClientsCollection.InsertOneAsync(client);
        }

        public async Task UpdateAsync(string nome, ClientsModel client)
        {
            await _ClientsCollection.ReplaceOneAsync(x => x.Nome == nome, client);
        }

        public async Task RemoveAsync(string nome)
        {
            await _ClientsCollection.DeleteOneAsync(x => x.ClientId == nome);
        }
    }
}
