# basic-MCP
Basic opensource MCP server


## Running-locally

Clone the repo

**Backend**

cd into backend.

Create *.env* file with these fields:

```
STYTCH_DOMAIN=
STYTCH_SECRET=
STYTCH_PROJECT_ID=
```

Then run:

> pip install uv
> uv run main.py

This starts the MCP Server on port 8000.

---

**Frontend**

cd into frontend.

Add your public token from STYTCH in *main.jsx* where it says ```add-your-public-token-here```

Then run:

> npm install
> npm run dev

This runs frontend application on port 5173

---