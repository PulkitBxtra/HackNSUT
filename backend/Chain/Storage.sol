// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Storage {
    struct Record {
        uint id;
        string aadhar;
        uint timestamp;
    }

    struct Patient {
        mapping(address => bool) accessAccounts;
        mapping(address => uint) addressToIndex;
        mapping(address => uint) addressToPendingIndex;
        AdminInfo[] admins;
        AdminInfo[] pendingAccess;
        PatientInfo info;
        uint id;
    }

    struct Admin {
        mapping (address => bool) accessAccounts;
        mapping(address => uint) addressToIndex;
        PatientInfo[] patients;
        AdminInfo info;
    }

    struct PatientInfo {
        string aadhar;
        string name;
        address publicAddress;
        string phoneNumber;
    }

    struct AdminInfo {
        string name;
    }

    uint userCount = 0;
    mapping(address => Record[]) public addressToRecord;
    mapping(address => Patient) public addressToPatient;
    mapping(address => Admin) public addressToAdmin;

    // user functions
    constructor() {
        AdminInfo memory adminInfo = AdminInfo("hekk");
        addressToAdmin[msg.sender].info = adminInfo;
    }

    function isRegisteredUser() public view returns(bool) {
        if(addressToPatient[msg.sender].id > 0)
            return true;
        else
            return false;
    }

    function createAccount(string memory addhar, string memory name, string memory phoneNumber) public {
        PatientInfo memory patientInfo = PatientInfo(addhar, name, msg.sender, phoneNumber);
        addressToPatient[msg.sender].id = ++userCount;
        addressToPatient[msg.sender].info = patientInfo;
    }

    function getRecordsUser() public view returns(Record[] memory) {
        return addressToRecord[msg.sender];
    }

    function getPendingAccessRequest() public view returns(AdminInfo[] memory) {
        return addressToPatient[msg.sender].pendingAccess;
    }
    
    function giveAccess(address adminAddress) public {

        //TODO: remove from pendingRequest

        addressToPatient[msg.sender].accessAccounts[adminAddress] = true;
        AdminInfo[] storage admins = addressToPatient[msg.sender].admins;
        addressToPatient[msg.sender].addressToIndex[adminAddress] = admins.length;
        admins.push(addressToAdmin[adminAddress].info);
        addressToPatient[msg.sender].admins = admins;

        addressToAdmin[adminAddress].accessAccounts[msg.sender] = true;
        PatientInfo[] storage patients = addressToAdmin[adminAddress].patients;
        addressToAdmin[adminAddress].addressToIndex[msg.sender] = patients.length;
        patients.push(addressToPatient[msg.sender].info);
        addressToAdmin[adminAddress].patients = patients;
    }

    // function removeAccess(address doctorAddress) public {
    //     addressToPatient[msg.sender].accessAccounts[doctorAddress] = false;
    // }


    //admin functions
    function getRecordsAdmin(address userAddress) public view returns(Record[] memory) {
        Record[] memory empty;
        if(addressToAdmin[msg.sender].accessAccounts[userAddress] == true) {
            return addressToRecord[userAddress];
        }
        else { 
            return empty;
        }
    }

    function pushRecord(address userAddress, uint id, string memory addhar, uint time) public returns(bool) {
        if(addressToAdmin[msg.sender].accessAccounts[userAddress] == true) {
            Record memory rec = Record(id, addhar, time);
            addressToRecord[userAddress].push(rec);
            return true;
        } else {
            return false;
        }
    }

    function requestAccess(address userAddress) public {
        AdminInfo[] storage admins = addressToPatient[userAddress].pendingAccess;
        addressToPatient[userAddress].addressToPendingIndex[msg.sender] = admins.length;
        admins.push(addressToAdmin[msg.sender].info);
        addressToPatient[userAddress].pendingAccess = admins;
    }

    function getAllPatients() public view returns(PatientInfo[] memory) {
        return addressToAdmin[msg.sender].patients;
    }

}
