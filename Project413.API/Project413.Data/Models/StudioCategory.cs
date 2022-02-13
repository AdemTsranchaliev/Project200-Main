namespace Project413.Data.Models
{
    public class StudioCategory
    {
        public Studio Studio { get; set; }
        public Guid StudioId { get; set; }

        public Category Category { get; set; }
        public Guid CategoryId { get; set; }
    }
}
