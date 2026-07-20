from fastmcp import FastMCP
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware import middleware

load_dotenv()

mcp = FastMCP(name="TODO App")

@mcp.tool()
def get_my_todos() -> str: