//RegisterModel is known as UserModel

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace webapi_24.Models
{
    public class UserModel
    {
        public int id { get; set; }   
        public string email { get; set; }
        public string username { get; set; }
         
        public string password { get; set; }

        public string mobileNumber { get; set; }    

    }
}