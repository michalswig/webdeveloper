create table developers
(
    id                        int auto_increment,
    name                      varchar(200) NOT NULL,
    address_country           varchar(200) NOT NULL,
    address_voivodeship       varchar(200),
    address_city              varchar(200) NOT NULL,
    address_street            varchar(200) NOT NULL,
    address_building_number   varchar(200) NOT NULL,
    address_flat_number       varchar(200),
    address_postal_code       varchar(200),
    telephone_number          varchar(200),
    fax_number                varchar(200),
    email                     varchar(200),
    tax_identification_number varchar(200) NOT NULL,
    primary key (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table investments
(
    id                  int auto_increment,
    name                varchar(200),
    description         varchar(5000),
    address_country     varchar(200),
    address_voivodeship varchar(200),
    address_city        varchar(200) NOT NULL,
    address_street      varchar(200),
    developer_id        int          NOT NULL,
    primary key (id),
    foreign key (developer_id) REFERENCES developers (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table sales_offices
(
    id                      int auto_increment,
    address_country         varchar(200),
    address_voivodeship     varchar(200),
    address_city            varchar(200) NOT NULL,
    address_street          varchar(200) NOT NULL,
    address_building_number varchar(200) NOT NULL,
    address_flat_number     varchar(200),
    address_postal_code     varchar(200),
    telephone_number        varchar(200),
    fax_number              varchar(200),
    email                   varchar(200),
    primary key (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table sales_office_opening_hours
(
    id              int auto_increment,
    day_of_week     varchar(200) NOT NULL,
    time_open       time         NOT NULL,
    time_closed     time         NOT NULL,
    sales_office_id int          NOT NULL,
    foreign key (sales_office_id) REFERENCES sales_offices (id),
    primary key (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table investments_with_sales_offices
(
    id              int auto_increment,
    sales_office_id int NOT NULL,
    investment_id   int NOT NULL,
    foreign key (sales_office_id) REFERENCES sales_offices (id),
    foreign key (investment_id) REFERENCES investments (id),
    primary key (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table employees
(
    id                        int auto_increment,
    first_name                varchar(200) NOT NULL,
    last_name                 varchar(200) NOT NULL,
    position                  varchar(200) NOT NULL,
    business_email            varchar(200),
    business_telephone_number varchar(200),
    address_country           varchar(200),
    address_voivodeship       varchar(200),
    address_city              varchar(200) NOT NULL,
    address_street            varchar(200) NOT NULL,
    address_building_number   varchar(200) NOT NULL,
    address_flat_number       varchar(200),
    address_postal_code       varchar(200) NOT NULL,
    private_telephone_number  varchar(200),
    private_email             varchar(200),
    personal_id_number        varchar(200) NOT NULL,
    developer_id              int          NOT NULL,
    foreign key (developer_id) REFERENCES developers (id),
    primary key (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table sales_offices_with_employees
(
    id              int auto_increment,
    employee_id     int NOT NULL,
    sales_office_id int NOT NULL,
    primary key (id),
    foreign key (employee_id) references employees (id),
    foreign key (sales_office_id) references sales_offices (id)
)
    ENGINE INNODB
    COLLATE utf8_general_ci;

create table customers
(
    id                                int auto_increment,
    first_name                        varchar(200) NOT NULL,
    last_name                         varchar(200) NOT NULL,
    private_address_country           varchar(200),
    private_address_voivodeship       varchar(200),
    private_address_city              varchar(200) NOT NULL,
    private_address_street            varchar(200) NOT NULL,
    private_address_building_number   varchar(200) NOT NULL,
    private_address_flat_number       varchar(200),
    private_address_postal_code       varchar(200) NOT NULL,
    private_telephone_number          varchar(200),
    private_fax_number                varchar(200),
    private_email                     varchar(200),
    personal_id_number                varchar(200),
    company_name                      varchar(200),
    company_address_country           varchar(200),
    company_address_city              varchar(200),
    company_address_street            varchar(200),
    company_address_building_number   varchar(200),
    company_address_flat_number       varchar(200),
    company_address_postal_code       varchar(200),
    company_telephone_number          varchar(200),
    company_fax_number                varchar(200),
    company_email                     varchar(200),
    company_tax_identification_number varchar(200),
    developer_id                      int          NOT NULL,
    primary key (id),
    foreign key (developer_id) references developers (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table buildings
(
    id                      int auto_increment,
    name                    varchar(200),
    address_country         varchar(200),
    address_voivodeship     varchar(200),
    address_city            varchar(200),
    address_street          varchar(200) NOT NULL,
    address_building_number varchar(200),
    address_postal_code     varchar(200),
    investment_id           int          NOT NULL,
    primary key (id),
    foreign key (investment_id) references investments (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;

create table premises
(
    id               int auto_increment,
    type             varchar(200)   NOT NULL,
    number           int            NOT NULL,
    floor            int(100)       NOT NULL,
    surface_sq_m     decimal(16, 2) NOT NULL,
    price_of_sq_m    decimal(16, 2),
    price_total      decimal(16, 2),
    number_of_rooms  int(100)       NOT NULL,
    technical_status varchar(200),
    sales_status     varchar(200),
    exposure         varchar(200),
    is_balcony       tinyint,
    is_garden        tinyint,
    is_terrace       tinyint,
    is_loggia        tinyint,
    building_id      int            NOT NULL,
    primary key (id),
    foreign key (building_id) references buildings (id)
)
    ENGINE INNODB
    COLLATE utf8mb4_general_ci;