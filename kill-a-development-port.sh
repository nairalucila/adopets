

# lsof -t -i :3000 | xargs kill -9   <- quick command

PORT=$(lsof -t -i :3000) 

if [ -n "$PORT" ]; then
    kill -9 $PORT
fi