using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ClimaBack_jefersonPardo.Models
{
    public partial class jeffersonBDContext : DbContext
    {
        public jeffersonBDContext()
        {
        }

        public jeffersonBDContext(DbContextOptions<jeffersonBDContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Clima> Climas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("data source = tcp:jeffazure.database.windows.net,1433;Initial Catalog=jeffersonBD;User ID=jeffazure;Password = Mp22081971");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Clima>(entity =>
            {
                entity.HasKey(e => e.IdClima)
                    .HasName("PK__Clima__063E1B3548CB534D");

                entity.ToTable("Clima");

                entity.Property(e => e.Fecha).HasColumnType("date");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
