using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Responses
{
    public class HistoryChatMessagesResponse
    {
        public string? ClientId { get; set; }
        public string? Text { get; set; }
        public string? Motivo { get; set; }
    }
}
