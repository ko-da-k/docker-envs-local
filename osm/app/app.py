from flask import Flask, render_template

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ac")
def accessible_map():
    return render_template("accessible_map.html")

@app.route("/mk")
def marker_sample():
    return render_template("marker_sample.html")


if __name__ == "__main__":
    app.run()
