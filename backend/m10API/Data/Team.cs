using System.ComponentModel.DataAnnotations;

namespace m10API.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }
        public string TeamName { get; set; }
    }
}
