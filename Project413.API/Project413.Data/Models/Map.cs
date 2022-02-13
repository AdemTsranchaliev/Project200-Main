namespace Project413.Data.Models
{
    public class Map
    {
        public Guid Id { get; set; }

        public double Lat { get; set; }

        public double Lng { get; set; }

        public Studio Studio { get; set; }
        public Guid StudioId { get; set; }
    }
}
