using Core.interfaces.Repositories;
using Core.models.Repositories;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Infrastructure.Repositories.MongoDb
{
    public class HistoryFeelsChatRepository : IHistoryFeelsChatRepository
    {
        private readonly IMongoCollection<HistoryFeelsChatModel> _ClientsCollection;

        public HistoryFeelsChatRepository(IOptions<ModelSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);
            var db = mongoClient.GetDatabase(options.Value.DatabaseName);

            _ClientsCollection = db.GetCollection<HistoryFeelsChatModel>("HistoricFeelsChat");
        }

        public async Task<ICollection<HistoryFeelsChatModel>> GetListHistoricAsync()
        {
            return await _ClientsCollection.Find(x => true).ToListAsync();
        }

        public async Task<ICollection<HistoryFeelsChatModel>> GetHistoricAsync(string ClientId)
        {
            return await _ClientsCollection.Find(x => x.ClientId == ClientId).ToListAsync();
        }

        public async Task CreateAsync(HistoryFeelsChatModel historic)
        {
            await _ClientsCollection.InsertOneAsync(historic);
        }

        public async Task UpdateAsync(string clientId, HistoryFeelsChatModel historic)
        {
            await _ClientsCollection.ReplaceOneAsync(x => x.ClientId == clientId, historic);
        }

        public async Task RemoveAsync(string clientId)
        {
            await _ClientsCollection.DeleteOneAsync(x => x.ClientId == clientId);
        }
    }
}
