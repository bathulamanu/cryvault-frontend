var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const customerAnnexureSubInformationModel = new Schema({
    customerAnnexureSubInformationId: {
        type: Number
    },
    customerID: {
        type: Number,
        unique:true
    },  
    customerAnnexureInformationId:{
        type: Number
    },
    CustomerEmergencyContactDetails: {
        Name: {
            type: String,
            default: ""
        },
        RelationSHip: {
            type: String,
            default: ""
        },
        Mobile1: {
            type: String,
            default: ""
        },
        Mobile2: {
            type: String,
            default: ""
        }
    },
    TickAsApplicableForFlyingbyts: {
        type: String,
        default: ""
    },
    ClientInfo:{
        MotherSignatureEmergency: {
            type: String,
            default: ""
        },
        FatherSignatureEmergency: {
            type: String,
            default: ""
        },
        MedicalDoctorSignatureEmergency: {
            type: String,
            default: ""
        }
    },
    ExcutiveInfoForbankUse: {
        NameOfExcutive: {
            type: String,
            default: ""
        },
        EmployeeCode: {
            type: String,
            default: ""
        },
        NameOfManager: {
            type: String,
            default: ""
        },
        AreaOrRegion: {
            type: String,
            default: ""
        },
        Date: {
            type: Date,
            default: ""
        },
        ExcutiveSignature: {
            type: String,
            default: ""
        },
        Name: {
            type: String,
            default: ""
        }
    },
    HealthHistoryQuestionnaire: {
        medicalCondition: {
            cancerDiabetesHepatitisBloodDisease: {
                type: Boolean
            },
            HIVAIDS: {
                type: Boolean
            },
            strokeLungSclerosis: {
                type: Boolean
            }
        },
        anyTypeInfection: {
            type: Boolean
        },
        DementiaDegenerativeDisease: {
            type: Boolean
        },
        biteFromAnimal: {
            type: Boolean
        },
        sexuallyTransmittedDisease: {
            type: Boolean
        },
        immunisationsTattoosBodypiercing: {
            type: Boolean
        },
        juvenileDetentionLockupJail: {
            type: Boolean
        },
        livedWithApersonWhoHasHepatitis: {
            type: Boolean
        },
        compensationForSex: {
            type: Boolean
        },
        receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation: {
            type: Boolean
        },
        IntimateContactWithWhoHasHIVAIDS: {
            type: Boolean
        },
        SARSavianFluH1N1: {
            type: Boolean
        },
        from1980Through1986: {
            spent3MonthsOrMoreCumulativelyInTheUnitedKingdom: {
                type: Boolean
            },
            ResidedAtaUSmilitaryBaseinEurope: {
                type: Boolean
            }
        },
        sufferedFromMalariaChikungunyaDengueandWestNileFever: {
            type: Boolean
        },
        visitedOrlivedOutsideofIndia: {
            type: Boolean
        },
        PersonalHistory: {
            AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives: {
                type: Boolean
            },
            pregnancyResultFromDonorEggSpermSurrogate: {
                type: Boolean
            },
            everHadAbnormalPregnancy: {
                type: Boolean
            }
        },
        FamilyHistory: {
            relativesWithCancerleukemiaBefore20: {
                type: Boolean
            },
            RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor: {
                type: Boolean
            },
            relativesWithCancerleukemiaBefore20WHO: {
                type: String
            },
            RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO: {
                type: String
            }
        },
        otherInfoIfTickedYES: {
            type: String
        },
        MotherSignatureHealthHistory: {
            type: String
        },
        MedicalDirectorSignatureHealthHistory: {
            type: String
        }

    },
    SignedByTheClientWithDetailsAsPerTheEnrollmentForm: {
        MotherOrGuardianSignature: {
            type: String,
            default: ""
        },
        FatherOrGuardianSignature: {
            type: String,
            default: ""
        },
        MotherOrGuardianName: {
            type: String,
            default: ""
        },
        FatherOrGuardianName: {
            type: String,
            default: ""
        }
    },
    Nomination: {
        NameOfNomineeOrGuardian: {
            type: String,
            default: ""
        },
        Relationship: {
            type: String,
            default: ""
        },
        Mobile: {
            type: String,
            default: ""
        },
        Address: {
            type: String,
            default: ""
        },
        IDProof: {
            type: String,
            default: ""
        },
        IDproofNo: {
            type: String,
            default: ""
        },
        IfOther: {
            type: String,
            default: ""
        }
    },
    ForBankUseConsentForm: {
        SignatureOfMedicalAdministrator: {
            type: String,
            default: ""
        },
        NameofMedicalAdministrator: {
            type: String,
            default: ""
        },
        DateofMedicalAdministratorSign: {
            type: Date,
            default: ""
        },
        SignatureOfMedicallDirector: {
            type: String,
            default: ""
        },
        NameofMedicallDirector: {
            type: String,
            default: ""
        },
        DateofMedicallDirectorSign: {
            type: Date,
            default: ""
        }
    },
    UmbilicalCordBloodAgreement: {
        DateOfProcessing: {
            type: Date
        },
        MotherOrGuardianSignature: {
            type: String,
            default: ""
        },
        FatherOrGuardianSignature: {
            type: String,
            default: ""
        },
        MotherOrGuardianName: {
            type: String,
            default: ""
        },
        FatherOrGuardianName: {
            type: String,
            default: ""
        },
        MotherSignedDate: {
            type: String,
            default: ""
        },
        FatherSignedDate: {
            type: String,
            default: ""
        },
        ForBankUse: {
            SignatureOfMedicalAdministrator: {
                type: String,
                default: ""
            },
            NameofMedicalAdministrator: {
                type: String,
                default: ""
            },
            DateofMedicalAdministratorSign: {
                type: Date,
                default: ""
            },
            SignatureOfMedicallDirector: {
                type: String,
                default: ""
            },
            NameofMedicallDirector: {
                type: String,
                default: ""
            },
            DateofMedicallDirectorSign: {
                type: Date,
                default: ""
            }
        }
    },
    AdditionalStoragePlan: {
        MotherOrGuardianSignature: {
            type: String,
            default: ""
        },
        FatherOrGuardianSignature: {
            type: String,
            default: ""
        },
        MedicalDirectorSignature: {
            type: String,
            default: ""
        },
        MotherOrGuardianName: {
            type: String,
            default: ""
        },
        FatherOrGuardianName: {
            type: String,
            default: ""
        },
        MedicalDirectorName: {
            type: String,
            default: ""
        }
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedTime: {
        type: Date,
        default: ""
    },
    status: {
        type: Boolean,
        default: true
    }
});


customerAnnexureSubInformationModel.plugin(AutoIncrement, { inc_field: 'customerAnnexureSubInformationId' });


const customerAnnexureModel = mongoose.model('customerAnnexuresubInformation', customerAnnexureSubInformationModel);

module.exports = customerAnnexureModel;

