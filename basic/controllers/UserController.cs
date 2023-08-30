using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi_24.Models;

namespace webapi_24.Controllers
{
    public class RegisterController : ApiController
    {
        SqlConnection con = new SqlConnection("Data Source=LAPTOP-H2BTVF3O\\SQLEXPRESS;Initial Catalog =learning; Integrated Security = true");
        SqlCommand cmd = null;

        SqlDataReader dr = null;

        // GET: api/Register

        public List<Register> Registerlist=new List<Register>();
        public List<Register> Get()
        {
            cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "Register_Get";
            con.Open();
            dr = cmd.ExecuteReader();
            while (dr.Read() == true)
            {
                Register register = new Register();
                register.email = dr["email"].ToString();
                register.password = dr["password"].ToString();
                register.username=dr["username"].ToString();
               
                register.id=int.Parse(dr["id"].ToString());
                register.mobilenumber = dr["mobilenumber"].ToString();
                
                Registerlist.Add(register);
            }
            return Registerlist; 
        }

        // GET: api/Register/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Register
        [HttpPost]
        public string Post(Register rm)
        {
            try
            {
                cmd = new SqlCommand();
                cmd.CommandText = "Register_Insert";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Connection = con;
                cmd.Parameters.AddWithValue("@email", rm.email);
                cmd.Parameters.AddWithValue("@password", rm.password);
                cmd.Parameters.AddWithValue("@username", rm.username);
                cmd.Parameters.AddWithValue("@mobilenumber", rm.mobilenumber);
                con.Open();
                int rowaffect = cmd.ExecuteNonQuery();
                con.Close();
                if (rowaffect > 0)
                {
                    return "Registration Sucessfull";
                }
                else
                {
                    return "Registration failed";
                }
            }
            catch
            {
                return "This Email is already registered";
                Console.WriteLine("These email is registered");
            }
           

        }

        // PUT: api/Register/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Register/5
        public void Delete(int id)
        {
        }
    }
}