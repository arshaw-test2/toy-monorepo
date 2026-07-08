export default {
  "mirrors": [
    {
      "mirror": "arshaw-test2/toy-mirror",
      "name": "live",
      "paths": [
        {
          "from": "packages/core",
          "to": "."
        }
      ],
      "pathClassification": "identity",
      "branches": [
        {
          "match": "main",
          "rename": "main"
        }
      ],
      "tags": [
        {
          "match": "v*",
          "rename": "v*"
        }
      ],
      "overlays": {},
      "pnpmSynthesis": true,
      "roundTrip": "full",
      "notes": "changelogs",
      "draft": false
    }
  ]
};
