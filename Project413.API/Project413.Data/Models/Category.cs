namespace Project413.Data.Models
{
    public class Category
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public ICollection<StudioCategory> StudioCategories { get; set; }
    }
}
