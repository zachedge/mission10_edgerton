using m10API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace m10API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;

        public BowlerController(IBowlerRepository temp)
        {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var bowlerData = _bowlerRepository.Bowlers;
            foreach (var bowler in bowlerData)
            {
                bowler.Team = _bowlerRepository.GetTeamById(bowler.TeamID);
            }
            return bowlerData.Where(bowler => bowler.Team != null && (bowler.Team.TeamName == "Marlins" || bowler.Team.TeamName == "Sharks"));
        }
    }
}
