using System;
using System.Collections.Generic;

#nullable disable

namespace ClimaBack_jefersonPardo.Models
{
    public partial class Clima
    {
        public int IdClima { get; set; }
        public DateTime? Fecha { get; set; }
        public double? Temperatura { get; set; }
        public double? Humedad { get; set; }
    }
}
