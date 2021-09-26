using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClimaBack_jefersonPardo.Models;

namespace ClimaBack_jefersonPardo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClimaController : ControllerBase
    {
        private readonly jeffersonBDContext _context;

        public ClimaController(jeffersonBDContext context)
        {
            _context = context;
        }

        // GET: api/Clima
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Clima>>> GetClimas()
        {
            return await _context.Climas.ToListAsync();
        }

        // GET: api/Clima/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Clima>> GetClima(int id)
        {
            var clima = await _context.Climas.FindAsync(id);

            if (clima == null)
            {
                return NotFound();
            }

            return clima;
        }

        // PUT: api/Clima/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClima(int id, Clima clima)
        {
            if (id != clima.IdClima)
            {
                return BadRequest();
            }

            _context.Entry(clima).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClimaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clima
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Clima>> PostClima(Clima clima)
        {
            _context.Climas.Add(clima);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClima", new { id = clima.IdClima }, clima);
        }

        // DELETE: api/Clima/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClima(int id)
        {
            var clima = await _context.Climas.FindAsync(id);
            if (clima == null)
            {
                return NotFound();
            }

            _context.Climas.Remove(clima);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClimaExists(int id)
        {
            return _context.Climas.Any(e => e.IdClima == id);
        }
    }
}
