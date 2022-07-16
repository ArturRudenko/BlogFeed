import {IUserResponseDto} from "./user.response.dto";
import {UserModel} from "./user.model";

class UserFactory {
  static fromResponseDto(dto: IUserResponseDto): UserModel {
    return {
      id: dto.id,
      name: dto.username,
      email: dto.email
    }
  }
}

export {UserFactory};