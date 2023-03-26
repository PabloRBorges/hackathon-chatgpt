
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace Core.models.Repositories
{
    [BsonIgnoreExtraElements]
    public class ClientsModel
    {
        [BsonElement("ClientId")]
        public string ClientId { get; set; }
        [BsonElement("nome")]
        public string? Nome { get; set; }
        [BsonElement("Idade")]
        public long? Idade { get; set; }
        [BsonElement("Cidade")]
        public string? Cidade { get; set; }
        [BsonElement("Sexo")]
        public string? Sexo { get; set; }
        [BsonElement("TempoContrato")]
        public long? TempoContrato { get; set; }
        [BsonElement("DisparoContratado")]
        public long? DisparoContratado { get; set; }
        [BsonElement("UsoDeDisparo")]
        public long? UsoDeDisparo { get; set; }
        [BsonElement("ContactHating")]
        public long? ContactHating { get; set; }
        [BsonElement("TempodaPrimeiraMensagem")]
        public long? TempodaPrimeiraMensagem { get; set; }
        [BsonElement("SetorDeCancelamento")]
        public string? SetorDeCancelamento { get; set; }
    }
}
