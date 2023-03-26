using Core.models.Repositories;
using MongoDB.Bson.Serialization.Attributes;

namespace Core.models.Requests
{
    [BsonIgnoreExtraElements]
    public class MessageRequest : ClientsModel
    {
        [BsonElement("Date")]
        public DateTime Date { get; set; }
        [BsonElement("Text")]
        public string? Text { get; set; }
        [BsonElement("Sentimento")]
        public string? Sentimento { get; set; }
    }
}
