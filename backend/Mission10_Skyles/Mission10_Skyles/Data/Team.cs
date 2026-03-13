using System.ComponentModel.DataAnnotations;

namespace Mission10_Skyles.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }

        public string TeamName { get; set; }

        public int? CaptainID { get; set; }

        // Navigation property
        public List<Bowler> Bowlers { get; set; }
    }
}
