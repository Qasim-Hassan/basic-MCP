from fastmcp import FastMCP
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware import Middleware
from starlette.requests import Request as StarletteRequest
from starlette.responses import JSONResponse
from fastmcp.server.auth import BearerAuthProvider
from fastmcp.server.dependencies import get_access_tokens, AccessToken
import os

load_dotenv()

auth = BearerAuthProvider(
    jwks_uri=f"{os.getenv('STYTCH_DOMAIN')}/.well-known/jwks.json",
    issuer=os.getenv("STYTCH_DOMAIN"),
    algorithm="RS256",
    audience=os.getenv("STYTCH_PROJECT_ID")
)

mcp = FastMCP(name="TODO App", auth=auth)

@mcp.tool()
def get_my_todos(_ctx) -> str:
    """Get all things to be done for the user"""
    return "no TODOs"

@mcp.tool()
def add_todos(_ctx, content: str) -> str:
    """add tasks to be done"""

    return f"added task: {content}"

if __name__ == "__main__":
    mcp.run(
        transport="http",
        host="127.0.0.1",
        port="8000",
        middleware=[
            Middleware(
                CORSMiddleware,
                allow_origins=["*"],
                allow_credentials=True,
                allow_methods=["*"],
                allow_headers=["*"],
            )
        ]
    )