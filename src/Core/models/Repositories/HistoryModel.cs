using MongoDB.Bson.Serialization.Attributes;

namespace Core.models.Repositories
{
    [BsonIgnoreExtraElements]
    public class HistoryModel
    {
        [BsonElement("ClientId")]
        public string ClientId { get; set; }
        [BsonElement("Date")]
        public DateTime Date { get; set; }
        [BsonElement("Sentimento")]
        public string Feel { get; set; }
    }
}
