import {DashboardCard} from "../component/DashboardCard.tsx";

export function Dashboard() {
    return (
        <>
            <main id="main" className="container shadow-lg rounded-4 mt-5">
                <div className="container-fluid table-index">
                    <div className="row g-3  mb-3">
                        <div className="col-md-4">
                            <h5>Dashboard</h5>
                        </div>
                    </div>

                    <section className="dash-overview ">
                        <div className="row g-4 justify-content-between">
                            <DashboardCard
                                h1text={10}
                            >
                                Active Vehicles
                            </DashboardCard>
                            <DashboardCard
                                h1text={20}
                            >
                                Active Fields
                            </DashboardCard>
                            <DashboardCard
                                h1text={300}
                            >
                                Active Equipment
                            </DashboardCard>
                            <DashboardCard
                                // h1text={"25°C <i className=\"fas fa-sun\"></i>"}
                                h1text="25°C ☀️"
                            >
                                Sunny
                            </DashboardCard>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}