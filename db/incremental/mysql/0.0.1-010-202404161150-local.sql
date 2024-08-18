# creates

DROP DATABASE IF EXISTS developer_project;
CREATE DATABASE developer_project;
use developer_project;

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



# inserts

INSERT INTO developers (name, address_country, address_voivodeship, address_city, address_street,
                        address_building_number, address_flat_number, address_postal_code, telephone_number, fax_number,
                        email, tax_identification_number)
VALUES ('Developer_01', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '1', '1', '00-001', '123456789',
        '123456789', 'dev_01@wp.pl', '1234567890');
INSERT INTO developers (name, address_country, address_voivodeship, address_city, address_street,
                        address_building_number, address_flat_number, address_postal_code, telephone_number, fax_number,
                        email, tax_identification_number)
VALUES ('Developer_02', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '2', '00-002', '123456789',
        '123456789', 'dev_02@wp.pl', '1234567890');

INSERT INTO investments (name, description, address_country, address_voivodeship, address_city, address_street,
                         developer_id)
VALUES ('Investment_01', 'Description_01', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', 1);
INSERT INTO investments (name, description, address_country, address_voivodeship, address_city, address_street,
                         developer_id)
VALUES ('Investment_02', 'Description_02', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', 1);
INSERT INTO investments (name, description, address_country, address_voivodeship, address_city, address_street,
                         developer_id)
VALUES ('Investment_03', 'Description_03', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', 2);
INSERT INTO investments (name, description, address_country, address_voivodeship, address_city, address_street,
                         developer_id)
VALUES ('Investment_04', 'Description_04', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', 2);

INSERT INTO sales_offices (address_country, address_voivodeship, address_city, address_street, address_building_number,
                           address_flat_number, address_postal_code, telephone_number, fax_number, email)
VALUES ('Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '1', '1', '00-001', '123456789', '123456789',
        'sales_office_01@wp.pl');
INSERT INTO sales_offices (address_country, address_voivodeship, address_city, address_street, address_building_number,
                           address_flat_number, address_postal_code, telephone_number, fax_number, email)
VALUES ('Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '1', '00-001', '123456789', '123456789',
        'sales_office_02@wp.pl');
INSERT INTO sales_offices (address_country, address_voivodeship, address_city, address_street, address_building_number,
                           address_flat_number, address_postal_code, telephone_number, fax_number, email)
VALUES ('Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '1', '1', '00-001', '123456789', '123456789',
        'sales_office_03@wp.pl');
INSERT INTO sales_offices (address_country, address_voivodeship, address_city, address_street, address_building_number,
                           address_flat_number, address_postal_code, telephone_number, fax_number, email)
VALUES ('Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '1', '00-001', '123456789', '123456789',
        'sales_office_04@wp.pl');

INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Monday', '09:00:00', '17:00:00', 1);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Tuesday', '09:00:00', '17:00:00', 1);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Wednesday', '09:00:00', '17:00:00', 1);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Thursday', '09:00:00', '17:00:00', 1);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Friday', '09:00:00', '17:00:00', 1);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Saturday', '10:00:00', '15:00:00', 1);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Monday', '09:00:00', '17:00:00', 2);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Tuesday', '09:00:00', '17:00:00', 2);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Wednesday', '09:00:00', '17:00:00', 2);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Thursday', '09:00:00', '17:00:00', 2);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Friday', '09:00:00', '17:00:00', 2);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Saturday', '10:00:00', '15:00:00', 2);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Monday', '09:00:00', '17:00:00', 3);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Tuesday', '09:00:00', '17:00:00', 3);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Wednesday', '09:00:00', '17:00:00', 3);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Thursday', '09:00:00', '17:00:00', 3);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Friday', '09:00:00', '17:00:00', 3);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Saturday', '10:00:00', '15:00:00', 3);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Monday', '09:00:00', '17:00:00', 4);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Tuesday', '09:00:00', '17:00:00', 4);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Wednesday', '09:00:00', '17:00:00', 4);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Thursday', '09:00:00', '17:00:00', 4);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Friday', '09:00:00', '17:00:00', 4);
INSERT INTO sales_office_opening_hours (day_of_week, time_open, time_closed, sales_office_id)
VALUES ('Saturday', '10:00:00', '15:00:00', 4);

INSERT INTO employees(first_name, last_name, position, business_email, business_telephone_number, address_country,
                      address_voivodeship, address_city, address_street, address_building_number, address_flat_number,
                      address_postal_code, private_telephone_number, private_email, personal_id_number, developer_id)
VALUES ('Jan', 'Kowalski', 'manager', 'manager_01@wp.pl', '123456789', 'Poland', 'Mazowieckie', 'Warszawa',
        'ul. Testowa', '2', '1', '00-001', '123456789', 'private_01@wp.pl', '123456789', 1);
INSERT INTO employees(first_name, last_name, position, business_email, business_telephone_number, address_country,
                      address_voivodeship, address_city, address_street, address_building_number, address_flat_number,
                      address_postal_code, private_telephone_number, private_email, personal_id_number, developer_id)
VALUES ('Jan', 'Kowalski2', 'manager', 'manager_01@wp.pl', '123456789', 'Poland', 'Mazowieckie', 'Warszawa',
        'ul. Testowa', '2', '1', '00-001', '123456789', 'private_01@wp.pl', '123456789', 1);
INSERT INTO employees(first_name, last_name, position, business_email, business_telephone_number, address_country,
                      address_voivodeship, address_city, address_street, address_building_number, address_flat_number,
                      address_postal_code, private_telephone_number, private_email, personal_id_number, developer_id)
VALUES ('Jan', 'Kowalski3', 'manager', 'manager_01@wp.pl', '123456789', 'Poland', 'Mazowieckie', 'Warszawa',
        'ul. Testowa', '2', '1', '00-001', '123456789', 'private_01@wp.pl', '123456789', 2);
INSERT INTO employees(first_name, last_name, position, business_email, business_telephone_number, address_country,
                      address_voivodeship, address_city, address_street, address_building_number, address_flat_number,
                      address_postal_code, private_telephone_number, private_email, personal_id_number, developer_id)
VALUES ('Jan', 'Kowalski4', 'manager', 'manager_01@wp.pl', '123456789', 'Poland', 'Mazowieckie', 'Warszawa',
        'ul. Testowa', '2', '1', '00-001', '123456789', 'private_01@wp.pl', '123456789', 2);

INSERT INTO sales_offices_with_employees(sales_office_id, employee_id)
VALUES (1, 1);
INSERT INTO sales_offices_with_employees(sales_office_id, employee_id)
VALUES (2, 2);
INSERT INTO sales_offices_with_employees(sales_office_id, employee_id)
VALUES (3, 3);
INSERT INTO sales_offices_with_employees(sales_office_id, employee_id)
VALUES (4, 4);

INSERT INTO investments_with_sales_offices(investment_id, sales_office_id)
VALUES (1, 1);
INSERT INTO investments_with_sales_offices(investment_id, sales_office_id)
VALUES (2, 2);
INSERT INTO investments_with_sales_offices(investment_id, sales_office_id)
VALUES (3, 3);
INSERT INTO investments_with_sales_offices(investment_id, sales_office_id)
VALUES (4, 4);


INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 1', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 1);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 2', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 1);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 3', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 2);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 4', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 2);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 5', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 3);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 6', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 3);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 7', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 4);
INSERT INTO buildings (name, address_country, address_voivodeship, address_city, address_street,
                       address_building_number, address_postal_code, investment_id)
VALUES ('Budynek 8', 'Poland', 'Mazowieckie', 'Warszawa', 'ul. Testowa', '2', '00-001', 4);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 1);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 1);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 1);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 1);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 2);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 2);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 2);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 2);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 3);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 3);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 3);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 3);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 4);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 4);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 4);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 4);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 5);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 5);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 5);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 5);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 6);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 6);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 6);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 6);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 7);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 7);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 7);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 7);

INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 8);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 8);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('a', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 8);
INSERT INTO premises (TYPE, NUMBER, FLOOR, SURFACE_SQ_M, PRICE_OF_SQ_M, PRICE_TOTAL, NUMBER_OF_ROOMS, TECHNICAL_STATUS,
                      SALES_STATUS, EXPOSURE, IS_BALCONY, IS_GARDEN, IS_TERRACE, IS_LOGGIA, BUILDING_ID)
VALUES ('b', '1', '1', '50', '1000', '50000', '2', 'a', 'r', 'w', '1', '1', '0', '0', 8);

INSERT INTO customers (first_name, last_name, private_address_country, private_address_voivodeship, private_address_city, private_address_street,
                       private_address_building_number, private_address_flat_number, private_address_postal_code, private_telephone_number, private_fax_number,
                       private_email, personal_id_number, company_name, company_address_country, company_address_city, company_address_street, company_address_building_number,
                       company_address_flat_number, company_address_postal_code, company_telephone_number, company_fax_number, company_email,
                       company_tax_identification_number, developer_id)
VALUES ('Jan', 'Kowalski1', 'Polska', 'Mazowieckie', 'Warszawa', 'Koszykowa', '1', '1', '00-001', '123456789', '123456789',
        'private@wp.pl', '123456789', 'Firma', 'Polska', 'Warszawa', 'Koszykowa', '1', '1', '00-001', '123456789', '123456789', 'business@wp.pl',
        '123456789', 1);
INSERT INTO customers (first_name, last_name, private_address_country, private_address_voivodeship, private_address_city, private_address_street,
                       private_address_building_number, private_address_flat_number, private_address_postal_code, private_telephone_number, private_fax_number,
                       private_email, personal_id_number, company_name, company_address_country, company_address_city, company_address_street, company_address_building_number,
                       company_address_flat_number, company_address_postal_code, company_telephone_number, company_fax_number, company_email,
                       company_tax_identification_number, developer_id)
VALUES ('Jan', 'Kowalski2', 'Polska', 'Mazowieckie', 'Warszawa', 'Koszykowa', '1', '1', '00-001', '123456789', '123456789',
        'private@wp.pl', '123456789', 'Firma', 'Polska', 'Warszawa', 'Koszykowa', '1', '1', '00-001', '123456789', '123456789', 'business@wp.pl',
        '123456789', 2);

# selected queries

select *
from premises
where building_id = 1
  and is_balcony = 1;

select *
from premises
where surface_sq_m > 30
  and number_of_rooms = 2
  and building_id = 1
  and sales_status = 'r';

select *
from premises p
         join buildings b on b.id = p.building_id
where b.address_city = 'Warszawa'
  and p.sales_status = 'r'
  and p.price_total BETWEEN 0 AND 1000000
  and p.surface_sq_m BETWEEN 0 AND 1000000
  and p.exposure = 'w'
  and p.number_of_rooms = 2
  and p.type = 'a'
  and p.is_balcony = 1;

select count(p.id)
from developer_project.buildings b
         join premises p on b.id = p.building_id
where b.address_city = 'Warszawa'
  and p.sales_status = 'r';

select *
from employees e
         JOIN sales_offices_with_employees sowe on e.id = sowe.employee_id
         JOIN investments_with_sales_offices iwso on sowe.sales_office_id = iwso.sales_office_id
where iwso.investment_id = 3;

select *
from premises
         join buildings b on b.id = premises.building_id
where premises.number_of_rooms = 2
  AND premises.surface_sq_m BETWEEN 40 AND 200
  AND premises.floor = 1
  AND b.investment_id = 1
  AND premises.sales_status = 'r'
  AND premises.type = 'a'
  AND premises.is_balcony = 1;

select *
from premises as p
         join buildings as b on b.id = p.building_id
         join investments as i on i.id = b.investment_id
where i.id = 1
  and p.sales_status = 'r'
  and p.type = 'a'
  and p.number_of_rooms = 2
  and p.surface_sq_m BETWEEN 40 AND 200;


-- Adding columns for Polish and English descriptions
ALTER TABLE investments
    ADD COLUMN description_pl VARCHAR(5000) AFTER description,
    ADD COLUMN description_en VARCHAR(5000) AFTER description_pl;

-- Adding columns for create_time, edit_time, and delete_time
ALTER TABLE investments
    ADD COLUMN create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN edit_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ADD COLUMN delete_time DATETIME NULL;

-- This is a simplistic example; your migration logic might differ
UPDATE investments
SET description_en = description
WHERE description IS NOT NULL;

-- Removing the original description column
ALTER TABLE investments
    DROP COLUMN description;

ALTER TABLE investments
    DROP COLUMN description_pl,
    DROP COLUMN description_en;
ALTER TABLE investments
    ADD COLUMN description VARCHAR(5000) AFTER name;


CREATE TABLE investments
(
    id                  INT AUTO_INCREMENT,
    name                VARCHAR(200),
    description         VARCHAR(5000),
    address_country     VARCHAR(200),
    address_voivodeship VARCHAR(200),
    address_city        VARCHAR(200) NOT NULL,
    address_street      VARCHAR(200),
    developer_id        INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (developer_id) REFERENCES developers (id)
)
    ENGINE=INNODB
    COLLATE=utf8mb4_general_ci;

CREATE TABLE investment_translations
(
    translation_id     INT AUTO_INCREMENT PRIMARY KEY,
    investment_id      INT NOT NULL,
    language_code      VARCHAR(2) NOT NULL,
    domain             VARCHAR(50) NOT NULL,
    value              VARCHAR(5000) NOT NULL,
    FOREIGN KEY (investment_id) REFERENCES investments (id)
);

INSERT INTO investment_translations (investment_id, language_code, domain, value) VALUES
                                                                                      (1, 'en', 'description', 'Eco-friendly estate with modern homes and green energy solutions.'),
                                                                                      (1, 'pl', 'description', 'Ekologiczne osiedle z nowoczesnymi domami i zielonymi rozwiązaniami energetycznymi.'),
                                                                                      (2, 'en', 'description', 'High-rise with luxury apartments and panoramic city views.'),
                                                                                      (2, 'pl', 'description', 'Wieżowiec z luksusowymi apartamentami i panoramicznym widokiem na miasto.'),
                                                                                      (3, 'en', 'description', 'Waterfront residences offering tranquility and stunning bay views.'),
                                                                                      (3, 'pl', 'description', 'Nadmorskie rezydencje zapewniające spokój i piękny widok na zatokę.'),
                                                                                      (4, 'en', 'description', 'Urban complex with residential and commercial spaces plus green areas.'),
                                                                                      (4, 'pl', 'description', 'Miejski kompleks mieszkalno-handlowy z zielonymi przestrzeniami.'),
                                                                                      (5, 'en', 'description', 'Hillside villas providing comfort and nature-friendly living.'),
                                                                                      (5, 'pl', 'description', 'Wille na wzgórzu zapewniające komfort i bliskość natury.'),
                                                                                      (6, 'en', 'description', 'Exclusive community with homes offering sunset views and private gardens.'),
                                                                                      (6, 'pl', 'description', 'Ekskluzywna społeczność z domami oferującymi widok na zachód słońca i prywatne ogrody.');

CREATE TABLE translations
(
    translation_id    INT AUTO_INCREMENT PRIMARY KEY,
    entity_id         INT NOT NULL,
    language_code     VARCHAR(2) NOT NULL,
    domain            VARCHAR(50) NOT NULL,
    `key`             VARCHAR(255) NOT NULL,
    value             TEXT NOT NULL,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at        TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO translations (entity_id, language_code, domain, `key`, value) VALUES
                                                                              (1, 'en', 'investment', 'description', 'Eco-friendly estate with modern homes and green energy solutions.'),
                                                                              (1, 'pl', 'investment', 'description', 'Ekologiczne osiedle z nowoczesnymi domami i zielonymi rozwiązaniami energetycznymi.'),
                                                                              (2, 'en', 'investment', 'description', 'High-rise with luxury apartments and panoramic city views.'),
                                                                              (2, 'pl', 'investment', 'description', 'Wieżowiec z luksusowymi apartamentami i panoramicznym widokiem na miasto.'),
                                                                              (3, 'en', 'investment', 'description', 'Waterfront residences offering tranquility and stunning bay views.'),
                                                                              (3, 'pl', 'investment', 'description', 'Nadmorskie rezydencje zapewniające spokój i piękny widok na zatokę.'),
                                                                              (4, 'en', 'investment', 'description', 'Urban complex with residential and commercial spaces plus green areas.'),
                                                                              (4, 'pl', 'investment', 'description', 'Miejski kompleks mieszkalno-handlowy z zielonymi przestrzeniami.'),
                                                                              (5, 'en', 'investment', 'description', 'Hillside villas providing comfort and nature-friendly living.'),
                                                                              (5, 'pl', 'investment', 'description', 'Wille na wzgórzu zapewniające komfort i bliskość natury.'),
                                                                              (6, 'en', 'investment', 'description', 'Exclusive community with homes offering sunset views and private gardens.'),
                                                                              (6, 'pl', 'investment', 'description', 'Ekskluzywna społeczność z domami oferującymi widok na zachód słońca i prywatne ogrody.');

alter table investments drop constraint investments_ibfk_2;
alter table investments drop column voivodeship_id;

alter table developers drop constraint developers_ibfk_2;
alter table developers drop column voivodeship_id;

alter table buildings drop constraint buildings_ibfk_3;
alter table buildings drop column voivodeship_id;

-- Adding columns for create_time, edit_time, and delete_time
ALTER TABLE buildings
    ADD COLUMN create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN edit_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ADD COLUMN delete_time DATETIME NULL;

ALTER TABLE cities
    ADD COLUMN create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN edit_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ADD COLUMN delete_time DATETIME NULL;

ALTER TABLE developers
    ADD COLUMN create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN edit_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ADD COLUMN delete_time DATETIME NULL;

drop table investment_translations;

ALTER TABLE premises
    ADD COLUMN create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN edit_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ADD COLUMN delete_time DATETIME NULL;

ALTER TABLE voivodeships
    ADD COLUMN create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN edit_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ADD COLUMN delete_time DATETIME NULL;

create table users
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    create_time  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    edit_time    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    delete_time  TIMESTAMP NULL
);

insert into users (login, password_hash) values ('admin', 'password');
