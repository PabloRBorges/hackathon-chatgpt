using Core.interfaces.Repositories;
using Core.models.Repositories;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Infrastructure.Repositories.MongoDb
{
    public class ChatGPTRepository : IChatGPTRepository
    {
        private readonly IMongoCollection<Clients> _ClientsCollection;

        public ChatGPTRepository(IOptions<ModelSettings> options)
        {

            var mongoClient = new MongoClient(options.Value.ConnectionString);
            var db = mongoClient.GetDatabase(options.Value.DatabaseName);

            _ClientsCollection = db.GetCollection<Clients>(options.Value.CollectionName);
        }

        public async Task<List<Clients>> GetListClientsAsync()
        {
            return await _ClientsCollection.Find(x => true).ToListAsync();
        }

        public async Task<Clients> GetClientAsync(string nome)
        {
            return await _ClientsCollection.Find(x => x.Nome == nome).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Clients client)
        {
            await _ClientsCollection.InsertOneAsync(client);
        }

        public async Task UpdateAsync(string nome, Clients client)
        {
            await _ClientsCollection.ReplaceOneAsync(x => x.Nome == nome, client);
        }

        public async Task RemoveAsync(string nome)
        {
            await _ClientsCollection.DeleteOneAsync(x => x.Nome == nome);
        }
    }
}
