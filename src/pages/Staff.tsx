import {Header} from "../component/Header.tsx";
import {StaffBtnCard} from "../component/StaffBtnCard.tsx";
import {useState} from "react";
import {StaffModal} from "../component/StaffModal.tsx";

export function Staff() {
    const [modalConfig, setModalConfig] = useState({
        isVisible: false,
        title: '',
        headerStyle: {},
        saveButtonText: '',
        closeButtonText: '',
        saveButtonClass: {},
        closeButtonClass: {},
        clearButtonClass: {},
    });

    function openModel(type: string) {
        switch (type) {
            case 'add':
                setModalConfig({
                    isVisible: true,
                    title: 'Add New Staff Details',
                    headerStyle: { background: 'linear-gradient(to right, #4389c8, #356e9d)' },
                    saveButtonText: 'Save',
                    closeButtonText: 'Close',
                    saveButtonClass: 'btn btn-primary btn-block',
                    closeButtonClass: 'btn btn-danger',
                    clearButtonClass: 'btn btn-secondary btn-block',
                });
                break;
            case 'update':
                setModalConfig({
                    isVisible: true,
                    title: 'Update Staff Details',
                    headerStyle: { background: 'linear-gradient(to right, #f1b44d, #d69438)' },
                    saveButtonText: 'Update',
                    closeButtonText: 'Close',
                    saveButtonClass: 'btn-warning btn btn-block',
                    closeButtonClass: 'btn btn-danger',
                    clearButtonClass: 'btn btn-secondary btn-block',
                });
                break;
            case 'delete':
                setModalConfig({
                    isVisible: true,
                    title: 'Delete Staff Details',
                    headerStyle: { background: 'linear-gradient(to right, #f36a6a, #d33f3f)' },
                    saveButtonText: 'Delete',
                    closeButtonText: 'Cancel',
                    saveButtonClass: 'btn-danger btn btn-block',
                    closeButtonClass: 'btn btn-secondary',
                    clearButtonClass: 'hidden',
                });
                break;
            case 'search':
                setModalConfig({
                    isVisible: true,
                    title: 'Search Staff Details',
                    headerStyle: { background: 'linear-gradient(to right, #5cb385, #4b946e)' },
                    saveButtonText: '',
                    closeButtonText: 'Close',
                    saveButtonClass: 'hidden',
                    closeButtonClass: 'btn btn-danger',
                    clearButtonClass: 'btn btn-secondary btn-block',
                });
                break;
            default:
                break;
        }
    }
    function closeModal() {
        setModalConfig((prev) => ({ ...prev, isVisible: false }));
    }
    function saveAction() {
        if (modalConfig.saveButtonText === 'Save') {
            alert('Save');
        } else if (modalConfig.saveButtonText === 'Update') {
            alert('Update');
        } else {
            alert('Delete');
        }
    }
    return (
        <>
            <section id="crudCard">
                <div className="container shadow-lg p-5 rounded-4 animatedBg">
                    <Header>Staff</Header>
                    <div className="row">
                        <StaffBtnCard
                            id="AddNewStaffBtn"
                            descStyle="card-desc addCard-desc"
                            iconStyle="fa fa-plus-circle"
                            type='add'
                            action={openModel}
                        >Add New Staff
                        </StaffBtnCard>
                        <StaffBtnCard
                            id="updateStaffBtn"
                            descStyle="card-desc updateCard-desc"
                            iconStyle="fas fa-pencil-alt"
                            type='update'
                            action={openModel}
                        >
                            Update Staff
                        </StaffBtnCard>
                        <StaffBtnCard
                            id="deleteStaffBtn"
                            descStyle="card-desc deleteCard-desc"
                            iconStyle="far fa-trash-alt"
                            type='delete'
                            action={openModel}
                        >
                            Delete Staff
                        </StaffBtnCard>
                        <StaffBtnCard
                            id="searchStaffBtn"
                            descStyle="card-desc searchCard-desc"
                            iconStyle="fa fa-search"
                            type='search'
                            action={openModel}
                        >
                            Search Staff
                        </StaffBtnCard>
                    </div>
                </div>
            </section>
            <StaffModal
                isVisible={modalConfig.isVisible}
                title={modalConfig.title}
                headerStyle={modalConfig.headerStyle}
                saveButtonText={modalConfig.saveButtonText}
                closeButtonText={modalConfig.closeButtonText}
                saveButtonClass={modalConfig.saveButtonClass}
                closeButtonClass={modalConfig.closeButtonClass}
                clearButtonClass={modalConfig.clearButtonClass}
                onClose={closeModal}
                onSave={saveAction}
                onClear={() => alert('Clear button clicked')}
            >
            </StaffModal>
        </>
    );
}