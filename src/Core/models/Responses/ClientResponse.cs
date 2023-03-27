using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Responses
{
    public class ClientResponse
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

        [JsonProperty("HistoricFeel", NullValueHandling = NullValueHandling.Ignore)]
        public string HistoricFeel { get; set; }

        [JsonProperty("HistoricoMotivo", NullValueHandling = NullValueHandling.Ignore)]
        public string HistoricoMotivo { get; set; }

        [JsonProperty("Status", NullValueHandling = NullValueHandling.Ignore)]
        public string Status { get; set; }
    }
}
