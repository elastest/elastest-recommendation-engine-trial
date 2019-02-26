echo "Loading sample ere-data"
#curl -v -H "Content-Type: application/json" -X POST -d '{"recursive":"true"}' http://localhost:39999/api/v1/paths//ere-data/delete
proxyip=$(docker inspect "--format={{.NetworkSettings.Networks.elastest_elastest.IPAddress}}" elastest_edm-alluxio-proxy_1)
curl -v -X POST http://$proxyip:39999/api/v1/paths//ere-data/create-directory
streamid=$(curl -v -X POST http://$proxyip:39999/api/v1/paths//ere-data/sample-DefaultMessageHandlerMethodFactory/create-file)
curl -v -X POST http://$proxyip:39999/api/v1/streams/$streamid/write --data-binary @sample-DefaultMessageHandlerMethodFactory -H "Content-Type: application/octet-stream"
curl -v -X POST http://$proxyip:39999/api/v1/streams/$streamid/close
echo "Verifying data loaded"
reader=$(curl -v -X POST http://$proxyip:39999/api/v1/paths//ere-data/sample-DefaultMessageHandlerMethodFactory/open-file)
curl -v -X POST http://$proxyip:39999/api/v1/streams/$reader/read
curl -v -X POST http://$proxyip:39999/api/v1/streams/$reader/close


