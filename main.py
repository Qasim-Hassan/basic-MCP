from fastmcp import FastMCP
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware import middleware

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