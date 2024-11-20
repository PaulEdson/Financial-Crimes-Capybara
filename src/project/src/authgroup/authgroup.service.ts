import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Authgroup } from './authgroup';

@Injectable()
export class AuthgroupService {
    
    //creating and injecting a repository for Authgroups
    constructor(@InjectRepository(Authgroup) private repo: Repository<Authgroup>) {}


    //method to find all Authgroups
    async findAll(): Promise<Authgroup[]> {
        return this.repo.find();
    }

    //method to find one Authgroup by ID
    async findOne(id: number): Promise<Authgroup>{
        return this.repo.findOne({ where: { AuthgroupId: id }});
    }

    //method to create a new Authgroup
    async create(newAuthgroup: Authgroup): Promise<Authgroup> {
        await this.repo.exists({
            where: { AuthgroupId: newAuthgroup.AuthgroupId
                }
            }).then(exists => {
                if(exists)
                    throw new HttpException(`Authgroup ID of ${newAuthgroup.AuthgroupId} already exists!`, HttpStatus.BAD_REQUEST)
                })
            return await this.repo.save(newAuthgroup)
    }

    //method to update an Authgroup
    async update(routeId: number, authgroupToUpdate: Authgroup) {
        if (routeId != authgroupToUpdate.AuthgroupId) {
            throw new HttpException(`Route ID and Body ID do not match!`, HttpStatus.BAD_REQUEST);
        }

        await this.repo.exists({
            where: {
                AuthgroupId: authgroupToUpdate.AuthgroupId
            }
        }).then(exists => {
            if (!exists)
                throw new HttpException(`Authgroup with ID ${authgroupToUpdate.AuthgroupId} does not exist!`, HttpStatus.NOT_FOUND);
        })

        return await this.repo.save(authgroupToUpdate);
    }

    //method to remove an Authgroup
    async remove(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }

}
