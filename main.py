from flask import Flask,render_template,request,request

app = Flask(__name__)

#Login Page
@app.route("/")
def main():
    return render_template("login.html")


#Login Page Authentication
@app.route('/login', methods=['POST','GET'])
def cdvslogin():

    #UI Input
    username=request.form["username"]
    password=request.form["password"]

    return render_template("homepage.html") 


# if __name__=="__main__":
#     app.run(host="0.0.0.0",port=8000)