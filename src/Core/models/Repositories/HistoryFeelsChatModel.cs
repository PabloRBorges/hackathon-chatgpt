﻿using MongoDB.Bson.Serialization.Attributes;

namespace Core.models.Repositories
{
    [BsonIgnoreExtraElements]
    public class HistoryFeelsChatModel
    {
        [BsonElement("ClientId")]
        public string? ClientId { get; set; }
        [BsonElement("Text")]
        public string? Text { get; set; }
        [BsonElement("Sentimento")]
        public string? Sentimento { get; set; }
    }
}