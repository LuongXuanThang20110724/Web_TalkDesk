const AgentModel = require("../models/Agent");
const RingGroupModel = require("../models/RingGroup");

class Agent {
  getAllAgent(req, res, next) {
    AgentModel.find()
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  addAgent(req, res, next) {
    const agent = req.body;
    const newAgent = new AgentModel(agent);
    newAgent.save();
    res.json(agent);
  }

  getAllRingGroup(req, res, next) {
    RingGroupModel.find()
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  getAllPhoneNumbers(req, res, next) {
    AgentModel.distinct("phone")
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  getAllWaitime(req, res, next) {
    AgentModel.find({}, { waitTime: 1, month: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getAllStatusTime(req, res, next) {
    AgentModel.find({}, { statusTime: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getAllStatus(req, res, next) {
    AgentModel.find({}, { status: 1, month: 1, statusTime: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getAllPhoneNumbersAndMonth(req, res, next) {
    AgentModel.find({}, { phone: 1, month: 1, _id: 0 })
      .then((call) => res.json(call))
      .catch((err) => res.json(err));
  }

  getKeyAndQuantityInCalls(req, res, next) {
    AgentModel.find()
      .then(
        (call) => {
          let ringGroup = [];
          call.forEach(
            (element) => {
              ringGroup.push(element.ringGroup);
            }
            // statistics ringGroup from call
          );
          const count = {};
          for (const el of ringGroup) {
            for (const ele of el.split(",")) {
              count[ele] = (count[ele] || 0) + 1;
            }
          }
          res.json(count);
        }
        // Return an array like: [ { key: 'ringGroup1', quantity: 2 }, { key: 'ringGroup2', quantity: 1 } ]
      )
      .catch((err) => res.json(err));
  }
}
module.exports = new Agent();
