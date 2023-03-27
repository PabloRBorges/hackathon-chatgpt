using Newtonsoft.Json;
namespace Core.models.Requests
{
    public class ChatRequest
    {
        [JsonProperty("ClientId", NullValueHandling = NullValueHandling.Ignore)]
        public string ClientId { get; set; }

        [JsonProperty("Nome", NullValueHandling = NullValueHandling.Ignore)]
        public string Nome { get; set; }

        [JsonProperty("Idade", NullValueHandling = NullValueHandling.Ignore)]
        public long? Idade { get; set; }

        [JsonProperty("Cidade", NullValueHandling = NullValueHandling.Ignore)]
        public string Cidade { get; set; }

        [JsonProperty("Sexo", NullValueHandling = NullValueHandling.Ignore)]
        public string Sexo { get; set; }

        [JsonProperty("TempoContrato", NullValueHandling = NullValueHandling.Ignore)]
        public long? TempoContrato { get; set; }

        [JsonProperty("DisparoContratado", NullValueHandling = NullValueHandling.Ignore)]
        public long? DisparoContratado { get; set; }

        [JsonProperty("UsoDeDisparo", NullValueHandling = NullValueHandling.Ignore)]
        public long? UsoDeDisparo { get; set; }

        [JsonProperty("ContactHating", NullValueHandling = NullValueHandling.Ignore)]
        public long? ContactHating { get; set; }

        [JsonProperty("TempodaPrimeiraMensagem", NullValueHandling = NullValueHandling.Ignore)]
        public long? TempodaPrimeiraMensagem { get; set; }

        [JsonProperty("SetorDeCancelamento", NullValueHandling = NullValueHandling.Ignore)]
        public string SetorDeCancelamento { get; set; }

        [JsonProperty("Status", NullValueHandling = NullValueHandling.Ignore)]
        public string Status { get; set; }

    }
}
