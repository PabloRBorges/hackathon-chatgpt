using Core.interfaces.Repositories;
using Core.models.Repositories;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories.MongoDb
{
    public class ChatGPTHistoryRepository : IChatGPTHistoryRepository
    {
        private readonly IMongoCollection<HistoryModel> _ClientsCollection;

        public ChatGPTHistoryRepository(IOptions<ModelSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);
            var db = mongoClient.GetDatabase(options.Value.DatabaseName);

            _ClientsCollection = db.GetCollection<HistoryModel>("Historic");
        }

        public async Task<ICollection<HistoryModel>> GetListHistoricAsync()
        {            
            return await _ClientsCollection.Find(x => true).ToListAsync();
        }

        public async Task<ICollection<HistoryModel>> GetHistoricAsync(string ClientId)
        {
            return await _ClientsCollection.Find(x => x.ClientId == ClientId).ToListAsync();
        }

        public async Task CreateAsync(HistoryModel historic)
        {
            await _ClientsCollection.InsertOneAsync(historic);
        }

        public async Task UpdateAsync(string clientId, HistoryModel historic)
        {
            await _ClientsCollection.ReplaceOneAsync(x => x.ClientId == clientId, historic);
        }

        public async Task RemoveAsync(string clientId)
        {
            await _ClientsCollection.DeleteOneAsync(x => x.ClientId == clientId);
        }
    }
}
