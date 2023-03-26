using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Repositories
{
    [BsonIgnoreExtraElements]
    public class Clients
    {
        [BsonElement("neme")]
        public string? Nome { get; set; }
        [BsonElement("idade")]
        public int Idade { get; set; }

    }
}
