
namespace m10API.Data
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingContext _bowlcontext;
        public EFBowlerRepository(BowlingContext temp) {
            _bowlcontext = temp;
        }
        public IEnumerable<Bowler> Bowlers => _bowlcontext.Bowlers;
        public IEnumerable<Team> Teams => _bowlcontext.Teams;
        public Team GetTeamById(int? teamID) {
            return _bowlcontext.Teams.Find(teamID);
        }
    }
}
