import {Header} from "../component/Header.tsx";
import {StaffBtnCard} from "../component/StaffBtnCard.tsx";

export function Staff() {
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
                        >Add New Staff
                        </StaffBtnCard>
                        <StaffBtnCard
                            id="updateStaffBtn"
                            descStyle="card-desc updateCard-desc"
                            iconStyle="fas fa-pencil-alt"
                        >
                            Update Staff
                        </StaffBtnCard>
                        <StaffBtnCard
                            id="deleteStaffBtn"
                            descStyle="card-desc deleteCard-desc"
                            iconStyle="far fa-trash-alt"
                        >
                            Delete Staff
                        </StaffBtnCard>
                        <StaffBtnCard
                            id="searchStaffBtn"
                            descStyle="card-desc searchCard-desc"
                            iconStyle="fa fa-search"
                        >
                            Search Staff
                        </StaffBtnCard>
                    </div>
                </div>
            </section>
        </>
    );
}