using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Skyles.Data;

namespace Mission10_Skyles.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private BowlingDbContext _context;
        public BowlingController(BowlingDbContext temp) 
        {
            _context = temp;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team != null &&
                    (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList();
            return bowlerList;
        }
    }
}
