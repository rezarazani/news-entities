// import "reflect-metadata";
// import {Container} from "inversify";
// import {ENTITY} from './types';

// import { ClientEntity } from "../client";
// import { UserEntity } from "../user";
// import { DriverEntity } from "../driver";
// import { VehicleEntity } from "../vehicle";

// import { Cuid, RandomCode, Bcrypt } from '@fast/utils';
// import { Hash } from "../interfaces/hash";
// import { Id } from "../interfaces/id";
// import { Code } from "../interfaces/code";

// const container = new Container();

// container.bind<ClientEntity>(ENTITY.Client).to(ClientEntity);
// container.bind<UserEntity>(ENTITY.User).to(UserEntity);
// container.bind<DriverEntity>(ENTITY.Driver).to(DriverEntity);
// container.bind<VehicleEntity>(ENTITY.Vehicle).to(VehicleEntity);

// container.bind<Hash>(ENTITY.Hash).to(Bcrypt);
// container.bind<Id>(ENTITY.Id).to(Cuid);
// container.bind<Code>(ENTITY.Code).to(RandomCode);

// export {container};