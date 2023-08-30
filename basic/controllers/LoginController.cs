using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi_24.Models;

using System.Data;

namespace webapi_24.Controllers
{
    public class LoginController : ApiController
    {
        SqlConnection con = new SqlConnection("Data Source=LAPTOP-H2BTVF3O\\SQLEXPRESS;Initial Catalog =learning; Integrated Security = true");
        SqlCommand cmd = null;

        SqlDataReader dr = null;

        



        // GET: api/Login
        public List<LoginModel> loginlist = new List<LoginModel>();

        public List<LoginModel> Get()

        {
            cmd = new SqlCommand();
            cmd.Connection = con;
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "Login_Get";
            con.Open();
            dr=cmd.ExecuteReader();
            while (dr.Read() == true)
            {
                LoginModel Login = new LoginModel();
                Login.email = dr["email"].ToString();
                Login.password = dr["password"].ToString();
                
                loginlist.Add(Login);   

            }
            con.Close();
            
            return loginlist;
        }
            

        // POST: api/Login
        public string Post(LoginModel ln)
        {
            // Check if the user exists and their credentials are valid
            if (UserExistsAndValid(ln.email, ln.password))
            {
                // Log the successful login
                LogSuccessfulLogin(ln.email,ln.password);
                return "Login Successful";
            }
            else if (UserExists(ln.email))
            {
                if (IsPasswordValid(ln.email, ln.password))
                {
                    LogSuccessfulLogin(ln.email, ln.password);
                    return "Login Successful";
                }
                else
                {
                    return "incorrect password";
                }


            }

            else
            {
                return "Login Failed. User does not exist";
            }

        }

        private bool UserExistsAndValid(string email, string password)
        {
            // Implement the logic to check if the user with the given email and password exists and is valid in your database.
            // You should use a SELECT query to check if the email and password match a record in your user table.
            // If it exists and the password matches, return true; otherwise, return false.

            cmd = new SqlCommand("SELECT COUNT(*) FROM Register WHERE email = @email AND password = @password", con);
            cmd.Parameters.AddWithValue("@email", email);
            cmd.Parameters.AddWithValue("@password", password);

            con.Open();
            int count = (int)cmd.ExecuteScalar();
            con.Close();

            return count > 0;
        }

        private string LogSuccessfulLogin(string email,string password)
        {
            // Implement the logic to log a successful login for the user with the given email.
            // You might record the login event in a log file, a separate table, or any other suitable method.
            // For this example, we'll just print a message to the console.

            cmd = new SqlCommand();
            cmd.CommandText = "Login_insert";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = con;
            cmd.Parameters.AddWithValue("@email",email);
            cmd.Parameters.AddWithValue("@password", password);
            con.Open();
            int rowaffect = cmd.ExecuteNonQuery();
            con.Close();
            if(rowaffect > 0)
            {
                return "Login information Stored";
                Console.WriteLine($"Successful login for user with email: {email}");

            }
            else
            {
                return "Login information failed";
            }

        }
        private bool UserExists(string email)
        {
            // Implement the logic to check if the user with the given email exists in your database.
            // You should use a SELECT query to check if the email matches a record in your user table.

            cmd = new SqlCommand("SELECT COUNT(*) FROM Register WHERE email = @email", con);
            cmd.Parameters.AddWithValue("@email", email);

            con.Open();
            int count = (int)cmd.ExecuteScalar();
            con.Close();

            return count > 0;
        }

        private bool IsPasswordValid(string email, string password)
        {
            // Implement the logic to check if the password is valid for the user with the given email.
            // You should use a SELECT query to check if the email and password match a record in your user table.

            cmd = new SqlCommand("SELECT COUNT(*) FROM Register WHERE email = @email AND password = @password", con);
            cmd.Parameters.AddWithValue("@email", email);
            cmd.Parameters.AddWithValue("@password", password);

            con.Open();
            int count = (int)cmd.ExecuteScalar();
            con.Close();

            return count > 0;
        }





        // PUT: api/Login/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Login/5
        public void Delete(int id)
        {
        }
    }
}