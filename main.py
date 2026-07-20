from fastmcp import FastMCP
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware import Middleware

load_dotenv()

mcp = FastMCP(name="TODO App")

@mcp.tool()
def get_my_todos() -> str:
    """Get all things to be done for the user"""
    return "no TODOs"

@mcp.tool()
def add_todos(content: str) -> str:
    """add tasks to be done"""

    return f"added task: {content}"

if __name__ == "__main__":
    mcp.run(
        transport="http",
        host="127.0.0.1",
        port="8000",
        middleware=[
            Middleware()
        ]
    )