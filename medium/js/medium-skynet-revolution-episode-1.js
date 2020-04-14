//MEDIUM: https://www.codingame.com/training/medium/skynet-revolution-episode-1

function BFS(links, source, nodeGws, gateways) {
  var queue = [source],
    visited = {};
  visited[source] = {
    parent: null,
    level: 0,
    gwCount: nodeGws[source].length,
    distance: 0,
  };
  while (queue.length > 0) {
    var current = queue.shift(),
      currentProps = visited[current];

    var neighbors = links[current];
    for (var i = 0, len = neighbors.length; i < len; ++i) {
      var neighbor = neighbors[i];
      if (!visited.hasOwnProperty(neighbor)) {
        // not visited yet
        var gwCount = nodeGws[neighbor].length,
          distance = currentProps.distance + (gwCount > 0 ? 0 : 1);
        visited[neighbor] = {
          parent: current,
          level: currentProps.level + 1,
          gwCount: gwCount,
          distance: distance,
        };

        if (gateways.indexOf(neighbor) == -1) {
          // Stop BFS for gateways!
          queue.push(neighbor);
        }
      }
    }
  }
  return visited;
}

function GetLinkToCut(links, gateways, nodeGws, SI) {
  var obj = {
    C1: null,
    C2: null,
  };

  // Optimize: look for immediate danger
  if (nodeGws[SI].length > 0) {
    // Skynet agent is at distance 1 to a gateway: no brainer
    printErr("Very close to a gateway");
    obj.C1 = SI;
    obj.C2 = nodeGws[SI][0];
  }

  if (!obj.C1) {
    printErr("Search for best link to cut");
    var visited = BFS(links, SI, nodeGws, gateways);
    printErr(JSON.stringify(visited));

    var min = Number.POSITIVE_INFINITY,
      maxgwCount = 0;
    for (var node in visited) {
      var distance = visited[node].distance,
        gwCount = visited[node].gwCount;
      if (gwCount > maxgwCount || (gwCount == maxgwCount && distance < min)) {
        obj.C1 = node;
        obj.C2 = nodeGws[node][0];

        min = distance;
        maxgwCount = gwCount;
      }
    }
  }

  return obj;
}

function SevereLink(links, nodeA, nodeB) {
  links[nodeA].splice(links[nodeA].indexOf(nodeB), 1);
  links[nodeB].splice(links[nodeB].indexOf(nodeA), 1);
}

//============================================================

var parts = readline().split(" "),
  N = parseInt(parts[0], 10),
  L = parseInt(parts[1], 10),
  E = parseInt(parts[2], 10);
printErr("N=" + N);
printErr("L=" + L);
printErr("E=" + E);

var links = {},
  nodeGws = {},
  gateways = [];

// links
for (var i = 0; i < N; ++i) {
  links[i] = [];
  nodeGws[i] = [];
}
for (i = 0; i < L; ++i) {
  parts = readline().split(" ");
  var N1 = parts[0],
    N2 = parts[1];
  links[N1].push(N2);
  links[N2].push(N1);
}
printErr(JSON.stringify(links));

// gateways
for (i = 0; i < E; ++i) {
  var EI = readline();
  gateways.push(EI);

  var gatewaysLinks = links[EI];
  for (var j = 0; j < gatewaysLinks.length; ++j) {
    nodeGws[gatewaysLinks[j]].push(EI);
  }
}

while (true) {
  var SI = readline();
  printErr("Skynet agent is at node " + SI);

  var obj = GetLinkToCut(links, gateways, nodeGws, SI);
  SevereLink(links, obj.C1, obj.C2);
  SevereLink(nodeGws, obj.C1, obj.C2);
  print(obj.C1 + " " + obj.C2);
}
