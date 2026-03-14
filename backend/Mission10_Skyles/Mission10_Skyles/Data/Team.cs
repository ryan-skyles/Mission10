using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Mission10_Skyles.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }

        public string? TeamName { get; set; }

        public int? CaptainID { get; set; }

        [JsonIgnore]
        public List<Bowler>? Bowlers { get; set; }
    }
}
