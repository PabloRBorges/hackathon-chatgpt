using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.models.Responses
{
    public class MotivoCancelamentoResponse
    {
        public string Tipo { get; set; }
        public double Valor { get; set; }
    }

    public class FeellClientResponse
    {
        public string Feel { get; set; }
        public double Valor { get; set; }
    }
}
