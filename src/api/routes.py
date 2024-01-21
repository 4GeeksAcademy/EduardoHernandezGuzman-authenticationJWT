"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User 
from api.utils import generate_sitemap, APIException
from flask_cors import CORS


from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

# @api.route('/prueba', methods=['POST', 'GET'])
# def handle_hello2():

#     response_body = {
#         "message": "prueba"
#     }

#     return jsonify(response_body), 200



######## LOGIN ########
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg" : "Incorrect email "}), 401
    if user.password != password:
        return jsonify({"msg": "Incorrect password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

######## SIGNUP ########
@api.route('/signup', methods=['POST'])
def signup():
    try:
        body = request.get_json()
        existing_user = User.query.filter_by(email=body["email"]).first()

        if existing_user:
            return jsonify({"msg": "El correo electrónico ya está en uso"}), 401

        new_user = User(email=body["email"], password=body["password"], is_active=True)
        db.session.add(new_user)
        db.session.commit()

        response_body = {
            "msg": "Te has registrado correctamente"
        }

        return jsonify(response_body), 200

    except Exception as e:
        return jsonify({"msg": str(e)}), 500


