import {aggregate} from "./aggregate";
import expect from 'expect';

describe('should aggregate complexity and churn data into common array of {x,y,label} objects for chart',
    () => {
        it('should return two x,y,label objects', () => {
            const complexity = [
                {"complexity": 177.0, "filename": "ConfirmedSimulationModel.java"},
                {"complexity": 184.0, "filename": "SimulationControllerTest.java"},
                {"complexity": 175.0, "filename": "ExternalTransferRequestServiceImpl.java"}
            ];
            const churn = [
                {"churn": 8, "filename": "SimulationControllerTest.java"},
                {"churn": 10, "filename": "ConfirmedSimulationModel.java"},
                {"churn": 9, "filename": "SimulationWithFixedInstallmentManualRemissionRetrievalStrategyTest.java"}
            ];
            const expected = [
                {"x": 177.0, "y": 10, "label": "ConfirmedSimulationModel.java"},
                {"x": 184.0, "y": 8, "label": "SimulationControllerTest.java"},
            ]
            const result = aggregate(complexity, churn);
            expect(result).toEqual(expected);
        });

        it('should return empty array', () => {
            const complexity = [
                {"complexity": 177.0, "filename": "ActivityClientDAOImpl.java"},
                {"complexity": 175.0, "filename": "ExternalTransferRequestServiceImpl.java"}
            ];
            const churn = [
                {"churn": 10, "filename": "ConfirmedSimulationModel.java"},
                {"churn": 8, "filename": "SimulationControllerTest.java"}
            ];
            const result = aggregate(complexity, churn);
            expect(result).toStrictEqual([]);
        });

        it('should return empty array for empty input', () => {
            const result = [...aggregate([], [])];
            expect(result).toEqual([]);
        });
    });